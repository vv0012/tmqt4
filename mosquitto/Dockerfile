FROM eclipse-mosquitto:1.6

COPY entrypoint.sh /entrypoint.sh
COPY acl /
COPY mosquitto.conf /mosquitto/config/mosquitto.conf

ENTRYPOINT ["sh", "/entrypoint.sh"]

CMD ["/usr/sbin/mosquitto","-c","/mosquitto/config/mosquitto.conf"]

EXPOSE 1883