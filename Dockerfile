FROM node:20-alpine

ARG SHOPIFY_API_KEY
ENV SHOPIFY_API_KEY=$SHOPIFY_API_KEY
EXPOSE 8081
WORKDIR /app
COPY web .
RUN yarn
RUN cd frontend && yarn install && yarn run build

CMD ["yarn", "serve"]