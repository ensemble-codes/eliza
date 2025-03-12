

const templates = {
  'bull-post': require('./bull-post.ts'),
}
export const getTemplateByService = (serviceName: string) => {
  if (templates[serviceName]) {
    return templates[serviceName];
  } else {
    console.error(`Template ${serviceName} not found`);
  }
}