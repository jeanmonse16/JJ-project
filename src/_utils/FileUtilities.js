export const getFileExtension = (filename) => {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2)
}
export const getFromFilenamePath = (fileNamePath) => ({
  filename: fileNamePath.replace(/^.*[\\\/]/, ''),
  fileExtension: getFileExtension(fileNamePath.replace(/^.*[\\\/]/, ''))
})
export const fileColors = {
  0: '#00bcd4',
  1: '#26c6da',
  2: '#4dd0e1',
  3: '#80deea'
}
export const fileExtensions = {
  pdf: 'pdf',
  docx: 'word',
  doc: 'word',
  pptx: 'powerpoint',
  ppt: 'powerpoint',
  xlsx: 'excel',
  xls: 'excel',
  png: 'image',
  PNG: 'image',
  jpg: 'image',
  JPG: 'image',
  svg: 'image',
  SVG: 'image',
  gif: 'image'
}
