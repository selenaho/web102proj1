import React from "react";
import Restaurant from "./Restaurant";

const Grid = () => {
    return (
        <div className="Grid">
            <Restaurant place = '1' name = 'Ramen By Ra' cost='$$' location='NoHo, Manhattan'/>
            <Restaurant place = '2' name = 'TONCHIN BROOKLYN' cost='$$' location='Williamsburg, Brooklyn'/>
            <Restaurant place = '3' name = 'ROKC' cost='$$' location='Hamilton Heights, Manhattan'/>
            <Restaurant place = '4' name = 'Okiboru House of Tsukemen' cost='$$' location='Lower East Side, Manhattan'/>
            <Restaurant place = '5' name = 'NR' cost='$$$' location='Lennox Hill, Manhattan'/>
            <Restaurant place = '6' name = 'Jeju Noodle Bar' cost='$$$$' location='West Village, Manhattan'/>
            <Restaurant place = '7' name = 'Ramen Ishida' cost='$$' location='Lower East Side, Manhattan'/>
            <Restaurant place = '8' name = 'OKONOMI // YUJI Ramen' cost='$$' location='Williamsburg, Brooklyn'/>
            <Restaurant place = '9' name = 'Shuya' cost='$$$' location='Murray Hill, Manhattan'/>
            <Restaurant place = '10' name = 'ippudo V' cost='$$' location='Downtown Brooklyn, Brooklyn'/>
        </div>
        
    )
}

export default Grid;