import fs from 'fs';
import path from 'path';

export async function getJsonData<T>(fileName: string): Promise<T> {
  const filePath = path.join(process.cwd(), 'src/data', `${fileName}.json`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

// Global data
export const getGlobalData = () => getJsonData<any>('global');
export const getSiteData = () => getJsonData<any>('site');
export const getNavData = () => getJsonData<any>('nav');

// Page specific data
export const getHomeData = () => getJsonData<any>('home');
export const getAboutData = () => getJsonData<any>('about');
export const getWorkData = () => getJsonData<any>('work');
export const getServicesData = () => getJsonData<any>('services');
export const getBlogData = () => getJsonData<any>('blog');
export const getContactData = () => getJsonData<any>('contact');

// Component data
export const getFaqData = () => getJsonData<any>('faq');
export const getInsightsData = () => getJsonData<any>('insights');
export const getProcessData = () => getJsonData<any>('process');
export const getStatsData = () => getJsonData<any>('stats');
export const getTeamData = () => getJsonData<any>('team');
export const getTestimonialsData = () => getJsonData<any>('testimonials');
export const getClientsData = () => getJsonData<any>('clients');
