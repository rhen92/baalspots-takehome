import React, { useState, useEffect } from "react";
import "./Features.css";
import { getFeatures } from "../api-calls";
import IndividualFeature from "../IndividualFeature/IndividualFeature";
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getFeatures()
      .then(data => {
        const firstSixFeatures = data.filter((feature, index) => index < 6);
        setFeatures(firstSixFeatures)
      })
      .catch(error => setError('Unable to show Features'))
  }, []);

  const featureCards = features.map((feature, index) => {
    return (
      <IndividualFeature
      key={index}
      title={feature.title}
      description={feature.description}
      link={feature.button.link}
      />
    )
  })

  return (
    <section className="section-styling">
      <h2 className="experience-title">Experience the Cardo</h2>
      <GridColumn width={10} m={'xxl'} align={'center'}>
        <GridRow align="center" justify="between">
        {featureCards.filter((card, index) => index < 3)}
        </GridRow>
      </GridColumn>
      <GridColumn width={10} m={'xxl'} align={'center'}>
        <GridRow align="center" justify="between">
        {featureCards.filter((card, index) => index > 2)}
        </GridRow>
      </GridColumn>
    </section>
  )
}

export default Features;
