// Display and highlight salary range element on job vacancy tile.
const tiles = $('.attrax-vacancy-tile');
tiles.each((_, tile) => {
  const element = $(tile).find('.attrax-vacancy-tile__salary');
  element.css({
    display: 'block',
    'background-color': 'yellow'
  });
});

// Display and highlight hidden elements on job posting.
const widgets = $('.cop-widget');
widgets.each((_, widget) => {
  const element = $(widget);
  if (element.css('display') === 'none') {
    element.css({
      display: 'block',
      'background-color': 'yellow'
    });
  }
});
