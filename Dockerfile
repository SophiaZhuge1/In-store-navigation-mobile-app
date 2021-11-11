# syntax=docker/dockerfile:1
FROM python:3.8
LABEL name="django_backend" \
      version="0.0.1"

ENV PYTHONUNBUFFERED=1

WORKDIR /code
COPY backend/requirements.txt /code/
RUN pip install -r requirements.txt
COPY backend/. /code/

RUN python manage.py migrate
RUN python manage.py loaddata */fixtures/*.json
EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]