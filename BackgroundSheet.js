/* eslint-env browser */
/* global
  _
  h
  */
'use strict'

const largestDimension = _.max(screen.width, screen.height)
const backgroundWidth = _([ 1024, 1280, 1366, 1440, 1600, 1680, 1920 ])
  .find(width => width > largestDimension)
  || 2550

const BackgroundSheet = () => h('img', {
  src:`//res.cloudinary.com/swifteagle/image/upload/c_limit,e_art:fes,w_${backgroundWidth}/v1525446382/AoOSheet.png`,
  style: { width: '100%', position: 'absolute', top: 0, left: 0 },
})

export default BackgroundSheet
