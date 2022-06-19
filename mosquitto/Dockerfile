FROM eclipse-mosquitto:1.6

COPY entrypoint.sh /entrypoint.sh
COPY mosquitto.conf /mosquitto/config/mosquitto.conf
COPY acl.acl /acl.acl

ENTRYPOINT ["sh", "/entrypoint.sh"]

CMD ["/usr/sbin/mosquitto","-c","/mosquitto/config/mosquitto.conf"]

EXPOSE 1883