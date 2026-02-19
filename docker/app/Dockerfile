FROM php:8.4-cli-alpine

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

# Symfony CLI
RUN set -eux; \
    apk add --no-cache curl bash; \
    curl -fsSL https://get.symfony.com/cli/installer | bash; \
    mv /root/.symfony*/bin/symfony /usr/local/bin/symfony; \
    composer --version; \
    symfony version

WORKDIR /app

CMD ["symfony", "server:start", "--no-tls", "--port=8000", "--listen-ip=0.0.0.0"]
