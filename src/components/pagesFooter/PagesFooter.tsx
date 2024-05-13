import './PagesFooter.scss'

const PagesFooter = () => {
  return (
    <div className='pages_footer_wrapper'>
        <div style={{marginBottom: '50px'}} className='line'></div>
      <ul className='pages_footer'>
        <li>About eBay</li>
        <li>Announcement</li>
        <li>Community</li>
        <li>Security centre</li>
        <li>Seller centre</li>
        <li>Policies</li>
        <li>Affliates</li>
        <li>Help & Contact</li>
        <li>Sitemap</li>
      </ul>
      <p className='copyright_footer'>Copyright © 1995-2023 eBay Inc. All Rights Reserved. <span>Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, Your Privacy Choices</span> and <span>AdChoice</span> </p>
    </div>
  )
}

export default PagesFooter