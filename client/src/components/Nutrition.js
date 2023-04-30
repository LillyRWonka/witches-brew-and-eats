import React from 'react';
import { getNutritionAPI } from '../utils/API';

function NutritionInfo(foodIngredients) {
    const myQuery = foodIngredients;
    getNutritionAPI(myQuery)
    .then((response) => {return response.json()} )
    .then ((data) => {
    return(
        <div className="col-sm-5 col-demo-facts-auto">
        <div className="demo-result-label">
          <div className="col-12">
            <section className="performance-facts" id="performance-facts">
              <div className="performance-facts_header">
                <h1 className="performance-facts_title">Nutrition Facts</h1>
                <p>
                  <span id="lnumser">0</span>
                  " serving per container"
                </p>
              </div>
              <table className="performance-facts_table">
                <thead>
                  <tr>
                    <th colspan="3" className="amps">Amount Per Serving</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colspan="2" id="lkal-val-cal">
                      <b>Calories</b>
                    </th>
                    <td className="nob">{data.calories}</td>
                  </tr>
                  <tr className="thick-row">
                    <td colspan="3" className="small-info">
                      <b>% Daily Value*</b>
                    </td>
                  </tr>
                  <tr>
                    <th colspan="2">
                      <b>Total Fat </b>
                      `${data.totalNutrients.FAT.quantity} ${data.totalNutrients.FAT.unit}`
                    </th>
                    <td>
                      <b>`${data.totalDaily.FAT.quantity} %`</b>
                    </td>
                  </tr>
                  <tr>
                    <td className="blank-cell"></td>
                    <th>Saturated Fat</th>
                      `${data.totalNutrients.FASAT.quantity} ${data.totalNutrients.FASAT.unit}`
                    <td>
                      <b>`${data.totalDaily.FASAT.quantity} %`</b>
                    </td>
                  </tr>
                  <tr>
                    <th colspan="2">
                      <b>Cholesterol</b>
                      `${data.totalNutrients.CHOLE.quantity} ${data.totalNutrients.CHOLE.unit}`
                    </th>
                    <td>
                      <b>`${data.totalDaily.CHOLE.quantity} %`</b>
                    </td>  
                  </tr>
                  <tr>
                    <th colspan="2">
                      <b>Sodium</b>
                      `${data.totalNutrients.NA.quantity} ${data.totalNutrients.NA.unit}`
                    </th>
                    <td>
                      <b>`${data.totalDaily.NA.quantity} %`</b>
                    </td>  
                  </tr>
                  <tr>
                    <th colspan="2">
                      <b>Total Carbohydrate</b>
                      `${data.totalNutrients.CHOCDF.quantity} ${data.totalNutrients.CHOCDF.unit}`
                    </th>
                    <td>
                      <b>`${data.totalDaily.CHOCDF.quantity} %`</b>
                    </td>  
                  </tr>
                  <tr className="thick-end">
                    <th colspan="2">
                      <b>Protein</b>
                      `${data.totalNutrients.PROCNT.quantity} ${data.totalNutrients.PROCNT.unit}`
                    </th>
                    <td>
                      <b>`${data.totalDaily.PROCNT.quantity} %`</b>
                    </td>  
                  </tr>
                </tbody>
              </table>
              <table className="performance-facts_table--grid">
                <tbody>
                  <tr>
                    <th>Vitamin D `${data.totalNutrients.VITD.quantity} ${data.totalNutrients.VITD.unit}`</th>
                    <td>
                      <b>`${data.totalDaily.VITD.quantity} %`</b>
                    </td>  
                  </tr>
                  <tr>
                    <th>Calcium `${data.totalNutrients.CA.quantity} ${data.totalNutrients.CA.unit}`</th>
                    <td>
                      <b>`${data.totalDaily.CA.quantity} %`</b>
                    </td>  
                  </tr>
                  <tr>
                    <th>Iron `${data.totalNutrients.FE.quantity} ${data.totalNutrients.FE.unit}`</th>
                    <td>
                      <b>`${data.totalDaily.FE.quantity} %`</b>
                    </td>  
                  </tr>
                  <tr className="thin-end">
                    <th>Potassium `${data.totalNutrients.K.quantity} ${data.totalNutrients.K.unit}`</th>
                    <td>
                      <b>`${data.totalDaily.K.quantity} %`</b>
                    </td>  
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
)
})
};

export default NutritionInfo;