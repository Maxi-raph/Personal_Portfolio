import html2pdf from "html2pdf.js"
import { toast } from "sonner"


export const downloadPdf = async () => {
  const resume = document.getElementById('resume-pdf')

  if (!resume) {
    toast.error('Unable to generate resume PDF.')
    return
  }

  try {
    const pdfBlob = await html2pdf()
      .set({
        margin: 0,
        filename: 'Raph-Resume.pdf',
        image: {
          type: 'jpeg',
          quality: 0.98,
        },
        html2canvas: {
          scale: 2,
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
        },
      })
      .from(resume)
      .outputPdf('blob')

    const url = URL.createObjectURL(pdfBlob)

    const link = document.createElement('a')
    link.href = url
    link.download = 'Raph-Resume.pdf'

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)

    toast.success('Resume downloaded successfully!')
  } catch (error) {
    toast.error('Failed to download resume.')
  }
}