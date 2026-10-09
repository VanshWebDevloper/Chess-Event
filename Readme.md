# Random Event Chess

Normal chess game , Unpredictable Events :).
 Turns traditional game into terror.

Random Event Chess is a horror-themed chess game built with Django, JavaScript, HTML, and CSS. The goal is to combine traditional chess gameplay with unpredictable random events, challenges, glitches, and spooky surprises.

# Concept

Imagine you're playing a normal chess match when suddenly the screen glitches, a mysterious message appears, or a random challenge changes the atmosphere of the game.

You never know what might happen next.

# Features

- Interactive chessboard
- Legal chess moves powered by "chess.js"
- Turn tracking and chess game-state detection
- Django-powered random event API
- Horror-themed event concepts
- Custom HTML and CSS interface

# Tech Stack

Technology| Purpose
Python| Backend logic
Django| Web framework and API
JavaScript| Chess interactions
chess.js| Chess rules and move validation
HTML5| Page structure
CSS3| Board styling and visual effects

# Project Structure

  random-chess/
  
  ├── config/
  
  │   ├── settings.py
  
  │   └── urls.py
  
  ├── game/
  
  │   ├── views.py
  
  │   └── urls.py
  
  ├── templates/
  
  │   └── index.html
  
  ├── static/
  
  │   ├── css/
  
  │   │   └── style.css
  
  │   └── js/
  
  │       └── script.js
  
  ├── manage.py
  
  └── README.md
  

# Getting Started

1. Clone the repository

git clone https://github.com/VanshWebDevloper/Chess-Event.git
cd Chess-Event

2. Install Django

python -m pip install django

3. Start the development server

python manage.py migrate
python manage.py runserver

4. Play

Open the local development URL:

"http://127.0.0.1:8000/"

# Roadmap

- [x] Create the initial chess interface
- [x] Integrate chess.js
- [x] Set up the Django project
- [x] Create a random-event API
- [ ] Build custom horror event animations
- [ ] Add sound effects and visual glitches
- [ ] Add an event cooldown and more event types
- [ ] Implement online multiplayer
- [ ] Synchronize events between both players
- [ ] Create a polished, responsive game UI

# Project Goal

To explore how traditional chess can be transformed into an unpredictable horror experience while learning backend development, frontend interactions, and multiplayer architecture.

# Project Status

Early development. The core chess interface and initial random-event backend are being developed. Online multiplayer and advanced horror effects are planned.

# License

No license has been selected yet. All rights remain with the respective copyright holders until a license is added.