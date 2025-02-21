from .models import Mitarbeiter
from rest_framework import serializers

class MitarbeiterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mitarbeiter
        fields = [
        'id',
        'name',
        'status',
        'herkunft',
        'kills',
        'ehre'
        ]

    def __str__(self):
        return self.name