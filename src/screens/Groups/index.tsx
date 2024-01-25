import { useState } from "react";
import { FlatList } from 'react-native';

import { Header } from "@components/Header";
import { HighLight } from "@components/Highligth";
import { GroupCard } from "@components/GroupCards";

import { Container } from "./styles";


export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Rock', 'Pelada', 'Cachorros']);

  return (
    <Container>
      <Header />
      <HighLight
        title="Turmas"
        subtitle="Jogue com a sua Turma"
      />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
      />
    </Container>
  )
}