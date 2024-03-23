FROM denoland/deno:debian-1.41.3

WORKDIR /src

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    zip \
    unzip \
    && rm -rf /var/lib/apt/lists/*
RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts

ENV PATH="/root/.deno/bin:$PATH"

COPY . .

EXPOSE 8000

CMD ["denon", "run", "-A", "main.ts"]
