from django.urls import path
from . import views

urlpatterns = [
    path(
        "api/random-event/",
        views.random_event,
        name="random_event",
    ),
]