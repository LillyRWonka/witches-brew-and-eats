import React, { useState } from "react";
import { getNutritionAPI } from "../utils/API";

function NutritionInfo(props) {
  const { product } = props;
  const [nutData, setnutData] = useState({});
  getNutritionAPI(product)
    .then((response) => {
      return response.json();
    })
    .then((object) => {
      const data = object.hits[0].recipe;
      setnutData(data);
      console.log(data, "data");
    });
  if (Object.keys(nutData).length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <div className="col-sm-5 col-demo-facts-auto">
      <div className="demo-result-label">
        <div className="col-12">
          <section className="performance-facts" id="performance-facts">
            <div className="performance-facts_header">
              <h1 className="performance-facts_title">Nutrition Facts</h1>
              <p>
                <span id="lnumser">0</span>" serving per container"
              </p>
            </div>
            <table className="performance-facts_table">
              <thead>
                <tr>
                  <th colspan="3" className="amps">
                    Amount Per Serving
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colspan="2" id="lkal-val-cal">
                    <b>Calories</b>
                  </th>
                  <td className="nob">{nutData.calories}</td>
                </tr>
                <tr className="thick-row">
                  <td colspan="3" className="small-info">
                    <b>% Daily Value*</b>
                  </td>
                </tr>
                <tr>
                  <th colspan="2">
                    <b>Total Fat </b>
                    `${nutData.totalNutrients.FAT.quantity} $
                    {nutData.totalNutrients.FAT.unit}`
                  </th>
                  <td>
                    <b>`${nutData.totalDaily.FAT.quantity} %`</b>
                  </td>
                </tr>
                <tr>
                  <td className="blank-cell"></td>
                  <th>Saturated Fat</th>
                  `${nutData.totalNutrients.FASAT.quantity} $
                  {nutData.totalNutrients.FASAT.unit}`
                  <td>
                    <b>`${nutData.totalDaily.FASAT.quantity} %`</b>
                  </td>
                </tr>
                <tr>
                  <th colspan="2">
                    <b>Cholesterol</b>
                    `${nutData.totalNutrients.CHOLE.quantity} $
                    {nutData.totalNutrients.CHOLE.unit}`
                  </th>
                  <td>
                    <b>`${nutData.totalDaily.CHOLE.quantity} %`</b>
                  </td>
                </tr>
                <tr>
                  <th colspan="2">
                    <b>Sodium</b>
                    `${nutData.totalNutrients.NA.quantity} $
                    {nutData.totalNutrients.NA.unit}`
                  </th>
                  <td>
                    <b>`${nutData.totalDaily.NA.quantity} %`</b>
                  </td>
                </tr>
                <tr>
                  <th colspan="2">
                    <b>Total Carbohydrate</b>
                    `${nutData.totalNutrients.CHOCDF.quantity} $
                    {nutData.totalNutrients.CHOCDF.unit}`
                  </th>
                  <td>
                    <b>`${nutData.totalDaily.CHOCDF.quantity} %`</b>
                  </td>
                </tr>
                <tr className="thick-end">
                  <th colspan="2">
                    <b>Protein</b>
                    `${nutData.totalNutrients.PROCNT.quantity} $
                    {nutData.totalNutrients.PROCNT.unit}`
                  </th>
                  <td>
                    <b>`${nutData.totalDaily.PROCNT.quantity} %`</b>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="performance-facts_table--grid">
              <tbody>
                <tr>
                  <th>
                    Vitamin D `${nutData.totalNutrients.VITD.quantity} $
                    {nutData.totalNutrients.VITD.unit}`
                  </th>
                  <td>
                    <b>`${nutData.totalDaily.VITD.quantity} %`</b>
                  </td>
                </tr>
                <tr>
                  <th>
                    Calcium `${nutData.totalNutrients.CA.quantity} $
                    {nutData.totalNutrients.CA.unit}`
                  </th>
                  <td>
                    <b>`${nutData.totalDaily.CA.quantity} %`</b>
                  </td>
                </tr>
                <tr>
                  <th>
                    Iron `${nutData.totalNutrients.FE.quantity} $
                    {nutData.totalNutrients.FE.unit}`
                  </th>
                  <td>
                    <b>`${nutData.totalDaily.FE.quantity} %`</b>
                  </td>
                </tr>
                <tr className="thin-end">
                  <th>
                    Potassium `${nutData.totalNutrients.K.quantity} $
                    {nutData.totalNutrients.K.unit}`
                  </th>
                  <td>
                    <b>`${nutData.totalDaily.K.quantity} %`</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}

export default NutritionInfo;
