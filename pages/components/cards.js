import { Card, Grid, Text, Link } from "@nextui-org/react";

export default function Cards() {
  return (
    <Card css={{ p: "$6", mw: "400px"}}>
      <Card.Header>
        <img
        alt="visio logo"
        src="https://raw.githubusercontent.com/dimaestra/visio/main/android-icon-36x36.png"
        width="36px"
        height="36px"
        />
        <Grid.Container css={{ pl: "$6" }}>
        <Grid xs={12}>
          <Text h4 css={{ color: "#121212", lineHeight: "$xs" }}>
            Visio
          </Text>
        </Grid>
        <Grid xs={12}>
          <Text css={{ color: "$accents8" }}>visio.vercel.app</Text>
        </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text css={{color: "#121212"}}>
          Visio helps the visually-impaired detect and locate objects, read books and documents with ease.
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link
          icon
          color="primary"
          target="_blank"
          href="https://github.com/dimaestra/visio"
        >
          Visit source code on GitHub.
        </Link>
      </Card.Footer>
    </Card>
  );
}