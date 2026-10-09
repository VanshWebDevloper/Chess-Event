import random
from django.http import JsonResponse
from django.views.decorators.http import require_GET

EVENTS = [
    {
        "title": "LIGHTS OUT",
        "message": "The lights flicker. Something moved behind the board.",
        "type": "horror",
    },
    {
        "title": "UNKNOWN SIGNAL",
        "message": "An unknown player is watching this match.",
        "type": "horror",
    },
    {
        "title": "PAWN HUNT",
        "message": "Your next challenge: capture a pawn!",
        "type": "challenge",
    },
    {
        "title": "SYSTEM ERROR",
        "message": "BOARD INTEGRITY: UNKNOWN",
        "type": "glitch",
    },
]


@require_GET
def random_event(request):
    if random.random() >= 0.25:
        return JsonResponse({"triggered": False})

    event = random.choice(EVENTS)
    return JsonResponse({
        "triggered": True,
        "event": event,
    })