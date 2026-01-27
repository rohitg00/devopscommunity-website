import axios from 'axios';
import { marked } from 'marked';
import { Resource } from '../types/Resource';

const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/rohitg00/DevOpsCommunity/main/README.md';

// Common DevOps terms to extract as tags
const DEVOPS_TERMS = [
  'devops',
  'git',
  'docker',
  'kubernetes',
  'k8s',
  'aws',
  'azure',
  'gcp',
  'terraform',
  'ansible',
  'jenkins',
  'cicd',
  'monitoring',
  'security',
  'cloud',
  'linux',
  'automation',
  'container',
  'microservices',
  'infrastructure',
  'devsecops',
  'roadmap',
  'path',
  'guide',
  'yaml',
  'youtube'
];

function cleanTitle(title: string): string {
  // Remove (Part X) and any ID numbers at the end
  title = title.replace(/\s*\(Part\s+\d+\)/gi, '')
               .replace(/\s*\([0-9]+\)$/, '')
               .trim();
  
  // Fix HTML entities
  title = title.replace(/&#39;/g, "'")
               .replace(/&amp;/g, '&')
               .replace(/&quot;/g, '"')
               .replace(/&lt;/g, '<')
               .replace(/&gt;/g, '>');
  
  return title;
}

function extractDevOpsTerms(text: string): string[] {
  const terms = new Set<string>();
  const lowercaseText = text.toLowerCase();
  
  // Extract hashtags
  const hashtags = text.match(/#\w+/g) || [];
  hashtags.forEach(tag => terms.add(tag.slice(1).toLowerCase()));
  
  // Extract common DevOps terms
  DEVOPS_TERMS.forEach(term => {
    if (lowercaseText.includes(term.toLowerCase())) {
      terms.add(term);
    }
  });
  
  // Check if it's a tweet or Twitter thread
  if (text.toLowerCase().includes('twitter.com') || 
      lowercaseText.includes('thread') ||
      lowercaseText.includes('tweet')) {
    terms.add('tweet');
  }
  
  return Array.from(terms);
}

interface Link {
  text: string;
  url: string;
}

function extractLinks(html: string): Link[] {
  const links: Link[] = [];
  const regex = /<a[^>]*href=["']([^"']*)["'][^>]*>(.*?)<\/a>/g;
  let match;

  while ((match = regex.exec(html)) !== null) {
    links.push({
      url: match[1],
      text: match[2].replace(/<\/?[^>]+(>|$)/g, '').trim()
    });
  }

  return links;
}

export async function fetchResources(): Promise<Resource[]> {
  try {
    const response = await axios.get(GITHUB_RAW_URL);
    const markdown = response.data;
    const html = marked(markdown);
    
    // Extract table content using regex
    const tableRegex = /<table>[\s\S]*?<\/table>/;
    const tableMatch = html.match(tableRegex);
    
    if (!tableMatch) {
      return [];
    }

    const resources: Resource[] = [];
    const rows = tableMatch[0].match(/<tr>[\s\S]*?<\/tr>/g);

    if (rows) {
      // Skip header row
      for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].match(/<td>([\s\S]*?)<\/td>/g);
        if (cells && cells.length >= 3) {
          const rawName = cells[0].replace(/<\/?[^>]+(>|$)/g, '').trim();
          const linksHtml = cells[1];
          const information = cells[2].replace(/<\/?[^>]+(>|$)/g, '').trim();
          
          // Clean up the name
          const name = cleanTitle(rawName);
          
          // Extract categories from both name and information
          const categories = extractDevOpsTerms(name + ' ' + information);
          
          // Extract all links from the links cell
          const links = extractLinks(linksHtml);
          
          if (links.length > 0) {
            // Create entries for each link
            links.forEach(link => {
              resources.push({
                name: link.text.match(/^\d+$/) ? `${name} (${link.text})` : name,
                information,
                link: link.url,
                categories
              });
            });
          } else {
            // If no links found, check for plain URLs
            const plainUrls = linksHtml.match(/https?:\/\/[^\s)]+/g) || [];
            if (plainUrls.length > 0) {
              plainUrls.forEach(url => {
                resources.push({
                  name,
                  information,
                  link: url,
                  categories
                });
              });
            } else {
              // If no links at all, create an entry with empty link
              resources.push({
                name,
                information,
                link: '',
                categories
              });
            }
          }
        }
      }
    }

    return resources;
  } catch (error) {
    console.error('Error fetching resources:', error);
    return [];
  }
}