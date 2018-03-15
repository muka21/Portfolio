from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render,redirect, get_object_or_404

from .forms import contact_form
from django.core.mail import send_mail, BadHeaderError

def home(request):
    if request.method == 'GET':
        form = contact_form()
    else:
        form = contact_form(request.POST)
        if form.is_valid():
            contact_name = form.cleaned_data['contact_name']
            contact_email = form.cleaned_data['contact_email']
            contact_message = form.cleaned_data['contact_message']
            try:
                send_mail(contact_name, contact_message, contact_email, ['nancymasamu@yahoo.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return redirect('success')
    return render(request,'base.html',{'form':form})


def success(request):
    return HttpResponse('Success! Thank you for your message.')
