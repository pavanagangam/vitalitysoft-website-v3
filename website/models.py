from django.db import models

class ContactInquiry(models.Model):
    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = "Contact Inquiries"

    def __str__(self):
        return f"{self.full_name} ({self.email}) - {self.created_at.strftime('%Y-%m-%d')}"


class QuoteRequest(models.Model):
    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    selected_technologies = models.CharField(max_length=255)
    budget_range = models.CharField(max_length=100)
    delivery_timeline = models.CharField(max_length=100)
    project_details = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = "Quote Requests"

    def __str__(self):
        return f"Quote: {self.full_name} - {self.budget_range} ({self.created_at.strftime('%Y-%m-%d')})"
