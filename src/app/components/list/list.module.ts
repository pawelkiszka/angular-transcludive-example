import { NgModule } from "@angular/core";
import { ListComponent, ListItemComponent, ListHeaderDirective, ListFooterDirective } from "./list.component";

@NgModule({
    declarations: [
        ListComponent,
        ListItemComponent,
        ListHeaderDirective,
        ListFooterDirective
    ],
    exports: [
        ListComponent,
        ListItemComponent,
        ListHeaderDirective,
        ListFooterDirective
    ]
})
export class ListModule {}