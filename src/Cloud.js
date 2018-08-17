import React, { Component } from "react";
import { Link } from "react-router-dom";
import { uniqueId } from "lodash";
import randomcolor from "randomcolor";
import "./Cloud.css";

export default class Cloud extends Component {
  render() {
    const { url } = this.props.match;
    const { labels } = this.props;

    return (
      <div>
        <ul className="tagsList">
          {labels
            .slice()
            .sort(() => Math.random() - 0.5)
            .map(({ id, label, sentimentScore }) => (
              <li className="tagElem" key={uniqueId()}>
                <Link
                  title={label}
                  className="tagElemLink"
                  style={{
                    fontSize: `${sentimentScore}px`,
                    color: `${randomcolor()}`
                  }}
                  to={`${url}${id}`}>
                  {label}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
