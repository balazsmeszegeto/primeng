import { Component, Input } from '@angular/core';

@Component({
    selector: 'templates-doc',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id"> </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>indicator</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>rotaterighticon</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>rotatelefticon</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>zoomouticon</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>zoominicon</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>closeicon</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>`
})
export class TemplatesDoc {
    @Input() id: string;

    @Input() title: string;
}
