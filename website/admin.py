from django.contrib import admin
from .models import ContactInquiry, QuoteRequest

@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'phone', 'created_at')
    search_fields = ('full_name', 'email', 'message')
    list_filter = ('created_at',)

@admin.register(QuoteRequest)
class QuoteRequestAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'budget_range', 'delivery_timeline', 'created_at')
    search_fields = ('full_name', 'email', 'selected_technologies', 'project_details')
    list_filter = ('budget_range', 'delivery_timeline', 'created_at')
