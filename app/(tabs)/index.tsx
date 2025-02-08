import { ScrollView, StyleSheet, Text, View } from "react-native";
import Table from '../components/table'

export default function Index() {
  const table_data: any = {
    table1: {
      name: 'Cool Table!',
      cap: 6,
      online: false,
      table_city: 'New York',
      players: ['mike', 'john', 'carly'],
      genres: ['Dungeons and Dragons'],
      table_id: '739373'
    },
    table2: {
      name: 'Cool Table!',
      cap: 6,
      online: true,
      table_city: 'Moscow',
      players: ['mike', 'john', 'carly'],
      genres: ['card games'],
      table_id: '7546'
    },
    table3: {
      name: 'Cool Table!',
      cap: 6,
      online: true,
      table_city: 'Moscow',
      players: ['mike', 'john', 'carly'],
      genres: ['classic', 'rpg', 'wargames'],
      table_id: '123'
    },
    table4: {
      name: 'a',
      cap: 2,
      online: false,
      table_city: 'Moscow',
      players: ['mike'],
      genres: ['trivia'],
      table_id: '2'
    },
    table5: {
      name: 'a',
      cap: 2,
      online: false,
      table_city: 'Moscow',
      players: ['mike'],
      genres: ['trivia'],
      table_id: '2'
    }
  }
  
  const user = {
    name: 'mcmikey',
    age: 18,
    player_city: 'Moscow',
    player_id: '000001',
    genres: ['classic', 'trivia'], 
    active_tables: []
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      alwaysBounceVertical={false}
      bounces={false}
    >
    {Object.keys(table_data).map(function(key: any) {
      if (table_data[key].online == false && table_data[key].table_city == user.player_city || table_data[key].online == true) {
        return (
          <Table
            key={key}
            data={table_data[key]}
          />
        )
    }})}
    {Object.keys(table_data).map(function(key: any) {
      if (table_data[key].online == false && table_data[key].table_city != user.player_city) {
        return (
          <Table
            key={key}
            data={table_data[key]}
          />
        )
    }})}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
