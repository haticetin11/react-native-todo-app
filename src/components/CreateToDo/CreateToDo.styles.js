import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        position: 'absolute',
    bottom: 0,
    width: '100%', // Genişliği ekranın tamamını kaplayacak şekilde ayarlayın
    backgroundColor: 'grey',
    flexDirection: 'row', // Sütun yerine satır düzeni kullanın
    justifyContent: 'space-between', // Elemanları sağ ve sol köşelere hizalayın
    alignItems: 'center', // Elemanları dikeyde ortala
    paddingHorizontal: 16, // Yatay kenar boşlukları ekleyin
    paddingVertical: 10, 
    },
    create:{
        backgroundColor: '#eceff1',
        padding: 7,
        flex: 1, // TextInput'in tüm alanı kaplamasını sağlar
        marginRight: 10, 
    },
    add:{
        backgroundColor: '#eceff1',
        padding: 10, 
        margin: 10,
        borderRadius: 5, 
    },
    text: {
        color: 'grey',
      },
    counter:{
        position: 'absolute', 
        top: 0, 
        right: 0,
        padding:20,
        fontWeight:'bold',
        fontSize:40,
        color:'#34485F'
    },
    title:{
        fontSize:40,
        fontWeight:'bold',
        color:'#34485F',
        padding:20,
    
      },
      divider:{
        height:1,
        backgroundColor:'#ddd',
        marginVertical:10,
      },
      task_Container:{
        backgroundColor:'#B9CDE4',
        flexDirection:"row",
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor:'#ddd',
        paddingVertical:12,
      },
      taskText:{
        fontSize:20
      },
      task_Delete:{
        fontSize:20,
        paddingRight:20,
        
      },

    
})