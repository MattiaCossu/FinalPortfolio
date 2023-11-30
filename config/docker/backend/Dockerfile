FROM python:3.9

ENV PYTHONUNBUFFERED 1

RUN mkdir /app
WORKDIR /app



COPY /backend/requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt
