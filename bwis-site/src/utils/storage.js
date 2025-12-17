// Data storage utilities using localStorage

const STORAGE_KEYS = {
  NEWS_EVENTS: 'bwis_news_events',
  GALLERY: 'bwis_gallery',
  DOWNLOADS: 'bwis_downloads',
  ADMISSIONS_ENQUIRIES: 'bwis_admissions_enquiries',
  CONTACT_MESSAGES: 'bwis_contact_messages',
};

// News & Events
export const getNewsEvents = () => {
  const data = localStorage.getItem(STORAGE_KEYS.NEWS_EVENTS);
  return data ? JSON.parse(data) : [];
};

export const saveNewsEvent = (event) => {
  const events = getNewsEvents();
  const newEvent = {
    id: Date.now().toString(),
    ...event,
    createdAt: new Date().toISOString(),
  };
  events.unshift(newEvent); // Add to beginning
  localStorage.setItem(STORAGE_KEYS.NEWS_EVENTS, JSON.stringify(events));
  return newEvent;
};

export const updateNewsEvent = (id, updates) => {
  const events = getNewsEvents();
  const index = events.findIndex((e) => e.id === id);
  if (index !== -1) {
    events[index] = { ...events[index], ...updates };
    localStorage.setItem(STORAGE_KEYS.NEWS_EVENTS, JSON.stringify(events));
    return events[index];
  }
  return null;
};

export const deleteNewsEvent = (id) => {
  const events = getNewsEvents();
  const filtered = events.filter((e) => e.id !== id);
  localStorage.setItem(STORAGE_KEYS.NEWS_EVENTS, JSON.stringify(filtered));
  return true;
};

// Gallery
export const getGalleryImages = () => {
  const data = localStorage.getItem(STORAGE_KEYS.GALLERY);
  return data ? JSON.parse(data) : [];
};

export const addGalleryImage = (image) => {
  const images = getGalleryImages();
  const newImage = {
    id: Date.now().toString(),
    ...image,
    createdAt: new Date().toISOString(),
  };
  images.unshift(newImage);
  localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(images));
  return newImage;
};

export const deleteGalleryImage = (id) => {
  const images = getGalleryImages();
  const filtered = images.filter((img) => img.id !== id);
  localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(filtered));
  return true;
};

// Downloads
export const getDownloads = () => {
  const data = localStorage.getItem(STORAGE_KEYS.DOWNLOADS);
  return data ? JSON.parse(data) : [];
};

export const addDownload = (file) => {
  const downloads = getDownloads();
  const newDownload = {
    id: Date.now().toString(),
    ...file,
    createdAt: new Date().toISOString(),
  };
  downloads.unshift(newDownload);
  localStorage.setItem(STORAGE_KEYS.DOWNLOADS, JSON.stringify(downloads));
  return newDownload;
};

export const deleteDownload = (id) => {
  const downloads = getDownloads();
  const filtered = downloads.filter((d) => d.id !== id);
  localStorage.setItem(STORAGE_KEYS.DOWNLOADS, JSON.stringify(filtered));
  return true;
};

// Admissions Enquiries
export const getAdmissionsEnquiries = () => {
  const data = localStorage.getItem(STORAGE_KEYS.ADMISSIONS_ENQUIRIES);
  return data ? JSON.parse(data) : [];
};

export const saveAdmissionsEnquiry = (enquiry) => {
  const enquiries = getAdmissionsEnquiries();
  const newEnquiry = {
    id: Date.now().toString(),
    ...enquiry,
    createdAt: new Date().toISOString(),
    status: 'new',
  };
  enquiries.unshift(newEnquiry);
  localStorage.setItem(STORAGE_KEYS.ADMISSIONS_ENQUIRIES, JSON.stringify(enquiries));
  return newEnquiry;
};

export const updateEnquiryStatus = (id, status) => {
  const enquiries = getAdmissionsEnquiries();
  const index = enquiries.findIndex((e) => e.id === id);
  if (index !== -1) {
    enquiries[index].status = status;
    localStorage.setItem(STORAGE_KEYS.ADMISSIONS_ENQUIRIES, JSON.stringify(enquiries));
    return enquiries[index];
  }
  return null;
};

export const deleteEnquiry = (id) => {
  const enquiries = getAdmissionsEnquiries();
  const filtered = enquiries.filter((e) => e.id !== id);
  localStorage.setItem(STORAGE_KEYS.ADMISSIONS_ENQUIRIES, JSON.stringify(filtered));
  return true;
};

// Contact Messages
export const getContactMessages = () => {
  const data = localStorage.getItem(STORAGE_KEYS.CONTACT_MESSAGES);
  return data ? JSON.parse(data) : [];
};

export const saveContactMessage = (message) => {
  const messages = getContactMessages();
  const newMessage = {
    id: Date.now().toString(),
    ...message,
    createdAt: new Date().toISOString(),
    status: 'new',
  };
  messages.unshift(newMessage);
  localStorage.setItem(STORAGE_KEYS.CONTACT_MESSAGES, JSON.stringify(messages));
  return newMessage;
};

export const deleteContactMessage = (id) => {
  const messages = getContactMessages();
  const filtered = messages.filter((m) => m.id !== id);
  localStorage.setItem(STORAGE_KEYS.CONTACT_MESSAGES, JSON.stringify(filtered));
  return true;
};
