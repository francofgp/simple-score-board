# src Info

A description of each component.

## App.js

Here is where the application runs (nothing awesome, right?). An important thing: you can add more matches if you want, adding
another `Board` component inside the class `boards-container`. The property `scoreBoard` could be _anything_, number; char;
name; whatever. For example:

```html
<div className="boards-container">
  <Board scoreBoard="{1}" />
  <Board scoreBoard="{2}" />
  <Board scoreBoard="{3}" />
  <!-- New score board 'A' -->
  <Board scoreBoard={'A'} />
  <!-- New score board 'B' -->
  <Board scoreBoard={'B'} />
  <!-- New score board 'C' -->
  <Board scoreBoard={'C'}/>
</div>
```

## Board.js

The **Board** is where the teams are playing. It contains the logic info and handle the components **Team**, **ConfigBoard**, **Timer** and **ShowWinner**.

### Team.js

This component shows _points_, _name_ and _buttons_ for handling the score _points_. The buttons appears when you move the
cursor over the team.

### ConfigBoard.js

Here you can change the team names and the maximal score of each match. Down there are two buttons, one to save the changes and the other to restore them by default.

### Timer.js

Time handler, useful for practice time. By default are 5 minutes for practice, and down you'll find the buttons _play_, _pause_ and _stop_ to take control of the practice time.

### ShowWinner.js

When one the teams gets the maximal score the **Winner** appears, with a reset button to restore the game and start a new match.
