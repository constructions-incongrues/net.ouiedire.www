.PHONY: dev dev-start dev-watch dev-stop install

dev: dev-start dev-watch

dev-start:
	php -d upload_max_filesize=512M -d post_max_size=512M -S localhost:8000 system/router.php &

dev-stop:
	pkill -f router.php
	pkill -f brunch

dev-watch:
	cd user/themes/ouiedire && brunch watch &

install:
	../../../../composer.phar install
	./bin/gpm install -y admin
