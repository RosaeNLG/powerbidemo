/*
*  Power BI Visual CLI
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
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