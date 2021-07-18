FROM tomcat:8.5-jdk8-openjdk
MAINTAINER geosolutions<info@geo-solutions.it>

# Tomcat specific options
ENV CATALINA_BASE "$CATALINA_HOME"
ENV JAVA_OPTS="${JAVA_OPTS}  -Xms512m -Xmx512m -XX:MaxPermSize=128m"

# Remove Tomcat manager, docs, and examples
RUN find "${CATALINA_BASE}/webapps/" -delete;

# Add war files to be deployed
COPY ./product/target/mapstore.war "${CATALINA_BASE}/webapps/"

# Geostore externalization template. Disabled by default
COPY docker/geostore-datasource-ovr.properties "${CATALINA_BASE}/conf/"
ARG GEOSTORE_OVR_OPT=""
ENV JAVA_OPTS="${JAVA_OPTS} ${GEOSTORE_OVR_OPT}"

# Set variable to better handle terminal commands
ENV TERM xterm

EXPOSE 8080
