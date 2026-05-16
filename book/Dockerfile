FROM texlive/texlive:latest

RUN apt-get update \
    && apt-get install -y --no-install-recommends fonts-noto-cjk make \
    && fc-cache -f \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /work
