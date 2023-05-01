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
    });
  if (Object.keys(nutData).length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <section className="performance-facts_table" id="performance-facts">
      <table className="performance-facts">
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
              <b>Calories </b>
            </th>
            <td>
              <b>{Math.floor(nutData.calories)}</b>
            </td>
          </tr>
          <tr className="thick-row">
            <td colspan="3" className="small-info">
              <b>% Daily Value*</b>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <b>Total Fat </b>
              {Math.floor(nutData.totalNutrients.FAT.quantity)}
              {nutData.totalNutrients.FAT.unit}
            </th>
            <td>
              <b>{Math.floor(nutData.totalDaily.FAT.quantity)} %</b>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <b>Saturated Fat </b>
              {Math.floor(nutData.totalNutrients.FASAT.quantity)}
              {nutData.totalNutrients.FASAT.unit}
            </th>
            <td>
              <b>{Math.floor(nutData.totalDaily.FASAT.quantity)} %</b>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <b>Cholesterol </b>
              {Math.floor(nutData.totalNutrients.CHOLE.quantity)}
              {nutData.totalNutrients.CHOLE.unit}
            </th>
            <td>
              <b>{Math.floor(nutData.totalDaily.CHOLE.quantity)} %</b>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <b>Sodium </b>
              {Math.floor(nutData.totalNutrients.NA.quantity)}
              {nutData.totalNutrients.NA.unit}
            </th>
            <td>
              <b>{Math.floor(nutData.totalDaily.NA.quantity)} %</b>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <b>Total Carbohydrate </b>
              {Math.floor(nutData.totalNutrients.CHOCDF.quantity)}
              {nutData.totalNutrients.CHOCDF.unit}
            </th>
            <td>
              <b>{Math.floor(nutData.totalDaily.CHOCDF.quantity)} %</b>
            </td>
          </tr>
          <tr className="thick-end">
            <th colspan="2">
              <b>Protein </b>
              {Math.floor(nutData.totalNutrients.PROCNT.quantity)}
              {nutData.totalNutrients.PROCNT.unit}
            </th>
            <td>
              <b>{Math.floor(nutData.totalDaily.PROCNT.quantity)} %</b>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="performance-facts">
        <tbody>
          <tr>
            <th>
              Vitamin D {Math.floor(nutData.totalNutrients.VITD.quantity)}
              {nutData.totalNutrients.VITD.unit}
            </th>
            <td>
              <b>{Math.floor(nutData.totalDaily.VITD.quantity)} %</b>
            </td>
          </tr>
          <tr>
            <th>
              Calcium {Math.floor(nutData.totalNutrients.CA.quantity)}
              {nutData.totalNutrients.CA.unit}
            </th>
            <td>
              <b>{Math.floor(nutData.totalDaily.CA.quantity)} %</b>
            </td>
          </tr>
          <tr>
            <th>
              Iron {Math.floor(nutData.totalNutrients.FE.quantity)}
              {nutData.totalNutrients.FE.unit}
            </th>
            <td>
              <b>{Math.floor(nutData.totalDaily.FE.quantity)} %</b>
            </td>
          </tr>
          <tr className="thin-end">
            <th>
              Potassium {Math.floor(nutData.totalNutrients.K.quantity)}
              {nutData.totalNutrients.K.unit}
            </th>
            <td>
              <b>{Math.floor(nutData.totalDaily.K.quantity)} %</b>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default NutritionInfo;
