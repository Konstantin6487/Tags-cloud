import React, { Component } from "react";
import { uniqueId } from "lodash";

export default class Label extends Component {
  renderLabels = () => {
    const { id: strId } = this.props.match.params;
    const { labels } = this.props;

    if (labels.length === 0) {
      return null;
    } else {
      const currentLabel = labels.find(({ id }) => strId === id);
      const sentimentsMentionsSum = Object.keys(currentLabel.sentiment).reduce(
        (acc, item) => acc + currentLabel.sentiment[item],
        0
      );

      const { negative, neutral, positive } = currentLabel.sentiment;
      const { label, pageType } = currentLabel;

      return (
        <ul>
          <li>
            <b>Label:</b> {label}
          </li>
          {negative ? (
            <li>
              <b>Negative Mentions:</b> {negative}
            </li>
          ) : null}
          {neutral ? (
            <li>
              <b>Neutral Mentions:</b> {neutral}
            </li>
          ) : null}
          {positive ? (
            <li>
              <b>Positive Mentions:</b> {positive}
            </li>
          ) : null}
          <li>
            <b>Total Mentions:</b> {sentimentsMentionsSum}
          </li>
          <li>
            <b>Page Types:</b>
            <ul>
              {Object.keys(pageType).map(item => (
                <li key={uniqueId()}>
                  <b>
                    {item}: {pageType[item]}
                  </b>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      );
    }
  };

  render() {
    return <div>{this.renderLabels()}</div>;
  }
}
