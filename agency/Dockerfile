FROM node:22.22.2-bookworm-slim
WORKDIR /app
COPY --chown=node:node agency ./agency
USER node
ENV PORT=7860 DATA_DIR=/tmp/agency-data
EXPOSE 7860
CMD ["node", "agency/server.mjs"]
