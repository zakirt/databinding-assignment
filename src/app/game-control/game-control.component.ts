import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    @Output() gameTick: EventEmitter<number> = new EventEmitter();
    counter = 0;
    private intervalId = null;

    constructor() { }

    ngOnInit() {
    }

    onGameStart() {      
        // We only want to process once until the counter is reset via Pause button
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {           
                this.gameTick.emit(++this.counter);
            }, 1000);                
        }       
    }

    onGamePause() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            this.counter = 0;
        }
    }

}
