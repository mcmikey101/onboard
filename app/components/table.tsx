import { View, Text, Pressable, StyleSheet } from 'react-native'

interface Table_Props {
    data: {
        name: string,
        cap: number,
        online: boolean,
        players: string[],
        table_city: string,
        table_id: string,
        genres: string[],
    }
}

export default function Table(props: Table_Props) {
    function join_table(table_id: string) {
        console.log('joined table ', table_id)
    }
    function format_genres(genres: string[]) {
        let str = ''
        if (genres.length == 1) {
            return genres[0]
        } else {
            for (let i = 0; i < genres.length; i++) {
                if (i != genres.length - 1) {
                    str += genres[i] + ', '
                } else {
                    str += genres[i]
                }
            }
        }
        return str
    }
    return (
        <>
        <View style={styles.table}>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 24}}>{props.data.name}</Text>
                <Text style={{fontSize: 24}}>Players: {props.data.players.length}/{props.data.cap}</Text>
                <Text style={{fontSize: 24}}>Mode: {props.data.online ? 'Online' : 'IRL'}</Text>
                <Text style={{fontSize: 16}}>We play: {format_genres(props.data.genres)}</Text>
            </View>
            <Pressable onPress={() => join_table(props.data.table_id)} style={styles.join_btn}>
                <Text style={{color: 'white'}}>Join Table</Text>
            </Pressable>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    table: {
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        padding: 20,
        width: '90%',
        margin: 5,
        height: 170,
    },
    join_btn: {
        backgroundColor: 'blue',
        padding: 5,
        margin: 5,
        alignItems: 'center',
        borderRadius: 10
    }
})
