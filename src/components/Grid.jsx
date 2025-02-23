import React from "react";
import Restaurant from "./Restaurant";

const Grid = () => {
    return (
        <table className="Grid">
            <tr>
                <td>
                    <Restaurant place = '1' name = 'Ramen By Ra' cost='$$' location='NoHo, Manhattan' menu='https://www.ramenbyra.com/ramen' src='https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2023/12/19093837/IMG_6379-1024x683.jpeg'/>
                </td>
                <td>
                    <Restaurant place = '2' name = 'TONCHIN BROOKLYN' cost='$$' location='Williamsburg, Brooklyn' menu='https://www.tonchinus.com/menu-brooklyn' src='https://cdn.prod.website-files.com/64f271c1bc251cc492d7f271/6516ecabf1b90cbdaab2efde_Copy%20of%2022_08_20_Tonchin_54.jpg'/>
                </td>
                <td>
                    <Restaurant place = '3' name = 'ROKC' cost='$$' location='Hamilton Heights, Manhattan' menu='http://rokcnyc.com/menu/rokc_menu.pdf' src='https://media.timeout.com/images/103626395/750/422/image.jpg'/>
                </td>        
            </tr>
            <tr>
                <td>
                    <Restaurant place = '4' name = 'Okiboru House of Tsukemen' cost='$$' location='Lower East Side, Manhattan' menu='https://okiboru.com/locations' src='https://cdn.vox-cdn.com/thumbor/WxjTfQWv58zlUi_IMyxuI_G6sKo=/0x0:1800x1440/1200x800/filters:focal(756x576:1044x864)/cdn.vox-cdn.com/uploads/chorus_image/image/70680355/75111936_111253313650371_178103205614321664_n.0.jpeg'/>
                </td>
                <td>
                    <Restaurant place = '5' name = 'NR' cost='$$$' location='Lennox Hill, Manhattan' menu='http://nr-nyc.com/assets/menu/nr_menu.pdf' src = 'https://lh5.googleusercontent.com/proxy/Mv9O1yvCOtbwyqlVC4frrP35ZnLxiyVIiTl36imuweUZMvdER83Hu13nFz6zKwwuKqQQ8qag26RA3Kiyhw'/>
                </td>
                <td>
                    <Restaurant place = '6' name = 'Jeju Noodle Bar' cost='$$$$' location='West Village, Manhattan' menu='https://www.jejunoodlebar.com/' src='https://images-prod.gothamist.com/gothamistgallery/2017/9/19/ab0402f73jeju-18-jpg.jpeg'/>
                </td>
            </tr>
            <tr>
                <td>
                    <Restaurant place = '7' name = 'Ramen Ishida' cost='$$' location='Lower East Side, Manhattan' menu='https://www.ramenishida.com/' src='https://images.squarespace-cdn.com/content/v1/594896ee2e69cf2a560d2dcf/1560104858880-IH5J7L7HBBI6PPNFUADY/RAMEN+ISHIDA_WEB+IMAGES_SHOYU+RAMEN.jpg'/>
                </td>
                <td>
                    <Restaurant place = '8' name = 'OKONOMI // YUJI Ramen' cost='$$' location='Williamsburg, Brooklyn' menu='https://www.okonomibk.com/menu' src='https://res.cloudinary.com/the-infatuation/image/upload/v1656119965/cms/reviews/okonomi/Ramen_2520Lab_2520Shoyu_2520Ramen.jpg'/>
                </td>
                <td>
                    <Restaurant place = '9' name = 'Shuya' cost='$$$' location='Murray Hill, Manhattan' menu='https://shuyas.com/' src='https://shuyas.com/images/shuyas_menu5.jpg'/>
                </td>
            </tr>
            <tr>
                <td>
                    <Restaurant place = '10' name = 'ippudo V' cost='$$' location='Downtown Brooklyn, Brooklyn' menu='https://db-ippudony-menu-qr.netlify.app/' src='https://images.happycow.net/venues/1024/41/61/hcmp416147_3043705.jpeg'/>
                </td>
            </tr>
        </table>
        
    )
}

export default Grid;