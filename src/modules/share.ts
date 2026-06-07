// Share — Web Share API con fallback a clipboard

export interface ShareData {
  title: string;
  text: string;
  url: string;
}

export const shareCard = async (data: ShareData): Promise<'shared' | 'copied' | 'unsupported'> => {
  if (navigator.share) {
    try {
      await navigator.share(data);
      return 'shared';
    } catch (err) {
      // El usuario canceló — no hacer nada
      if ((err as DOMException).name === 'AbortError') return 'shared';
      return fallbackCopy(data);
    }
  }
  return fallbackCopy(data);
};

const fallbackCopy = async (data: ShareData): Promise<'copied' | 'unsupported'> => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(data.url);
      return 'copied';
    } catch {
      return 'unsupported';
    }
  }
  return 'unsupported';
};

// Generar vCard para descarga
export const buildVCard = (data: {
  name: string;
  role: string;
  phone?: string;
  email?: string;
  url?: string;
  location?: string;
}): string => {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${data.name}`,
    `TITLE:${data.role}`,
  ];
  if (data.phone) lines.push(`TEL;TYPE=CELL:${data.phone}`);
  if (data.email) lines.push(`EMAIL:${data.email}`);
  if (data.url) lines.push(`URL:${data.url}`);
  if (data.location) lines.push(`ADR;TYPE=WORK:;;${data.location};;;;`);
  lines.push('END:VCARD');
  return lines.join('\r\n');
};

export const downloadVCard = (data: Parameters<typeof buildVCard>[0]) => {
  const vcard = buildVCard(data);
  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${data.name.replace(/\s+/g, '-').toLowerCase()}.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
