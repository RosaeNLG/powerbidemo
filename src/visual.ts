/**
 * @license
 * Copyright 2021 Ludan Stoecklé, (c) Microsoft Corporation
 * SPDX-License-Identifier: Apache-2.0 AND MIT
 */

"use strict";

import "core-js/stable";
import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import DataView = powerbi.DataView;

import rosaenlg from '../node_modules/rosaenlg/dist/rollup/rosaenlg_tiny_en_US_1.14.0.js';
import template from '../compiledTemplateSales.js';

export class Visual implements IVisual {

    private target: HTMLElement;
    private textNode: Text;

    constructor(options: VisualConstructorOptions) {

        console.log('Visual constructor', options);
        this.target = options.element;
        if (document) {
            const new_p: HTMLElement = document.createElement("div");
            this.textNode = document.createTextNode('NLG placeholder...');
            new_p.appendChild(this.textNode);
            this.target.appendChild(new_p);
        }
    }

    public update(options: VisualUpdateOptions) {
        let dataView: DataView = options.dataViews[0];
        // console.log(dataView);


        const data = {
            salesQty: dataView.categorical.values[0].values[0],
            salesAmount: dataView.categorical.values[1].values[0],
        };

        console.log(data);

        const generatedText = template({
            util: new rosaenlg.NlgLib({ language: 'en_US' }),
            data: data,
        });

        // console.log(generatedText);

        if (this.textNode) {
            this.textNode.textContent = generatedText;
        }

    }

}