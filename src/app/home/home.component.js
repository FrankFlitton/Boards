(function() {
    'use strict';

    angular.module('app').component('home', {
        controller: HomeController,
        controllerAs: 'vm',
        templateUrl: 'app/home/home.view.html',
    });

    /** @ngInject */
    function HomeController($log, $translate, SAMPLE_CONSTANT) {
        var vm = this;
        
        // Make functions accessible from template
        vm.updateValue = updateValue;
        vm.addToList = addToList;
        vm.moveList = moveList;
        vm.addList = addList;
        vm.tempName = '';
        
        vm.lists = [
        {
            name: 'Bob',
            items: ["Make Lunch", "Tie Shoes", "Count By Twos"],
            tempTask: 'add me!'
        }, {
            name: 'Andy',
            items: [],
            tempTask: ''

        }, {
            name: 'Sally',
            items: [],
            tempTask: ''

        }, {
            name: 'Rachel',
            items: [],
            tempTask: ''

        } ];
        
        vm.listTemplate = [{
            name: '',
            items: [],
            tempTask: ''
        }]
        
        function updateValue(index) {
            // Required for 2 way bindings.
        }
        
        function addToList(index) {
            var target = vm.lists[index].items;
            var toDo = vm.lists[index].tempTask;
            
            if ( toDo.length > 0 ) {
                target.push(toDo);
                vm.lists[index].tempTask = '';
            } else {
                alert('Please Enter A Task 🙌')
            }
            
            console.log(vm);
        }
        
        
        function moveList(itemIndex, listIndex, direction) {
            
            var target = vm.lists[listIndex].items[itemIndex],
                moveBy = 0,
                listTotal = vm.lists.length,
                destination = null,
                destinationIndex = null;

            // find direction to move
            switch (direction) {
                case 'L':
                    moveBy -= 1;
                    break
                case 'R':
                    moveBy += 1;
                    break
            }
            
            console.log(listTotal);
            
            // New Array index
            destinationIndex = _findListNumber(moveBy, listIndex, listTotal);
            console.log(vm);
            destination = vm.lists[destinationIndex]['items'];
            
            //Move to Proper place
            destination.push(target);
                        
            //Remove Source
            vm.lists[listIndex].items.splice(itemIndex, 1);
            
            // Wrap around logic
            function _findListNumber(m, l , t) {
                return ( ( l + m + t ) % t ); // avoid negitive integers, add total 
            }
            
            
                        
        }
        
        function addList(name) {
            if (vm.tempName.length > 0) {
                var newList = angular.copy(vm.listTemplate);
                newList.name = vm.tempName;
                newList.items = [];
                vm.lists.push(newList);
                vm.tempName = '';
            } else {
                alert('Please Enter A Name');
            }
        }

    }

})();