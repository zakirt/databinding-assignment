import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {    
    gameTicks: number[] = [];

    onGameTick(counter) {
        // Reset the array if we are statring over
        if (counter === 1) {
            this.gameTicks = [];
        }
        this.gameTicks.push(counter);
    }     
}
