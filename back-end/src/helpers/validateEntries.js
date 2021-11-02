const validateLength = (title, description) => {
  if (title && title.length > 20) return { code: 400, message: 'Title length exceeded.' };
  if (description && description.length > 90) {
    return { code: 400, message: 'Description length exceeded.' };
  }
  return null;
};

const validateStatus = (status) => {
  if (status && status !== 'pending' && status !== 'in progress' && status !== 'ready') {
    return { code: 400, message: 'Invalid status' };
  }
  return null;
};

const validateContent = (title, author, status, method) => {
  if (method === 'put') {
    return null;
  }
  if (!title || !author || !status) {
    return { code: 400, message: 'Invalid entries, try again.' };
  }
  return null;
};

module.exports = (title, description, author, status, method) => {
  const byContent = validateContent(title, author, status, method);
  const byLength = validateLength(title, description);
  const byStatus = validateStatus(status);
  if (byContent) return byContent;
  if (byLength) return byLength;
  if (byStatus) return byStatus;
  return {};
};