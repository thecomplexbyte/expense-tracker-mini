FROM php:8.4-cli-alpine

WORKDIR /app

# System + PHP
RUN set -eux; \
    apk add --no-cache bash curl git; \
    apk add --no-cache --virtual .build-deps $PHPIZE_DEPS mariadb-dev; \
    docker-php-ext-install pdo_mysql; \
    apk del .build-deps

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

# Symfony CLI
RUN set -eux; \
    curl -fsSL https://get.symfony.com/cli/installer | bash; \
    mv /root/.symfony*/bin/symfony /usr/local/bin/symfony

# Default container command
CMD ["symfony", "server:start", "--no-tls", "--port=8000", "--listen-ip=0.0.0.0"]
