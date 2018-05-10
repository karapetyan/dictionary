import Error from '../../containers/Dictionary/Error/Error';
import AddWord from '../../containers/Dictionary/AddWord/AddWord';
import PairsList from '../../containers/Dictionary/PairsList/PairsList';

const Dictionary = () =>
    <div>
        <header>
            <h1>Словарь</h1>
            <Error />
        </header>
        <main>
            <AddWord />
            <PairsList />
        </main>
    </div>

export default Dictionary