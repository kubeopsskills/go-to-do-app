FROM golang:alpine as builder

RUN apk add --no-cache tzdata

RUN apk update && apk add --no-cache git

WORKDIR /service

COPY . .

RUN go mod tidy

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o api

FROM alpine:3 as certs

RUN apk --no-cache add ca-certificates

FROM scratch as runtime

COPY --from=certs /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt

COPY --from=builder /service/.env .env

COPY --from=builder /service/api .

ENV TZ=Asia/Bangkok

ENTRYPOINT ["/api"]